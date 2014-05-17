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

def visualizza_celle(master):
	hpc = SKEL_1(STRUCT(MKPOLS(master)))
	hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2) 
	return VIEW(hpc)

def rimuovi_celle(toRemove,master):
	master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
	return


def merge_celle(toMerge,master,diagrams):
	if (len(toMerge) != len(diagrams)):
		return "errore le liste sono di lunghezza differente"
	else :
		k = 0
		for i in toMerge:
			++k
			master = diagram2cell(diagrams[k],master,i)
			visualizza_celle(master)
		return master


def function(toMerge,toRemove,master,diagrams):
	master = merge_celle(toMerge,master,diagrams)
	master = rimuovi_celle(toMerge,master)
	#visualizza_celle(master)
	return


master = assemblyDiagramInit([2,2,2])([[2,2],[2,2],[2,2]])
V,CV = master





