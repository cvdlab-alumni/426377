""" progressive refinement of a block diagram """
from pyplasm import *
from scipy import *
import os,sys
""" import modules from larcc/lib """
sys.path.insert(0, '/home/matteo/NEW_Grafica Computazionale/lar-cc/lib/py/')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *
from sysml import *


DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([13,9,2])([[.2,1,.2,4,.2,1,.2,2,.2,2,.2,4,.2],[.2,3,.2,1,.2,1,.2,3,.2],[.2,3]])
V,CV = master
hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(CV)),CYAN,2)
#VIEW(hpc)

toRemove = [33,31,29,25,21,19,20,18,0,1,2,3,21,69,65,105,101,67,83,31,24,6,4,22,23,7,5,57,59,61,75,77,79,93,
			95,97,137,141,133,135,173,175,177,129,147,165,183,201,199,219,217,164,182,146,218,127,145,163,
			128,146,164,182,200,126,144,162,180,198,216,181,213,211,209,207,205,169,187,151]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
DRAW(master)



