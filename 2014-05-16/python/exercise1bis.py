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

master_block = assemblyDiagramInit([3,3,3])([[.3,14,.3],[.3,8,.3],[.3,3,.3]])
V,CV = master_block

toRemove = [13,14]
master1 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master)
'''hpc = SKEL_1(STRUCT(MKPOLS(master1)))
hpc = cellNumbering (master1,hpc)(range(len(master1[1])),CYAN,2)
VIEW(hpc)'''



"Adding the walls on the x axis"

toMerge = 13
x_split = assemblyDiagramInit([1,7,1])([[14],[3,.2,1,.2,1,.2,4],[3]])
splitted_x = diagram2cell(x_split,master_block,toMerge)


toRemove = [15,26,28,30]
V,CV = splitted_x
hpc = SKEL_1(STRUCT(MKPOLS(splitted_x)))
hpc = cellNumbering (splitted_x,hpc)(range(len(splitted_x[1])),CYAN,2)
VIEW(hpc)

master2 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
hpc = SKEL_1(STRUCT(MKPOLS(master2)))
hpc = cellNumbering (master2,hpc)(range(len(master2[1])),CYAN,2)
VIEW(hpc)


"Generating the first split on y axis"

toMerge = 26
y_split_1 = assemblyDiagramInit([5,1,1])([[1,.2,5,.2,8],[3],[3]])
splitted_y_1 = diagram2cell(y_split_1,splitted_x,toMerge)

hpc = SKEL_1(STRUCT(MKPOLS(splitted_y_1)))
hpc = cellNumbering (splitted_y_1,hpc)(range(len(splitted_y_1[1])),CYAN,2)
VIEW(hpc)

toMerge = 28
y_split_2 = assemblyDiagramInit([5,1,1])([[1,.2,5,.2,8],[3],[3]])
splitted_y_2 = diagram2cell(y_split_2,splitted_x,toMerge)

hpc = SKEL_1(STRUCT(MKPOLS(splitted_y_2)))
hpc = cellNumbering (splitted_y_2,hpc)(range(len(splitted_y_2[1])),CYAN,2)
VIEW(hpc)