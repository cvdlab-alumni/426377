""" boundary extraction of a block diagram """
from pyplasm import *
from scipy import *
import os,sys
sys.path.insert(0, '/home/matteo/NEW_Grafica Computazionale/lar-cc/lib/py/')
from lar2psm import *
from simplexn import *
from larcc import *
from largrid import *
from mapper import *
from boolean import *

from sysml import *
DRAW = COMP([VIEW,STRUCT,MKPOLS])


def objExporter((V,FV), filePath):
    out_file = open(filePath,"w")
    out_file.write("# List of Vertices:\n")
    for v in V:
        out_file.write("v")
        for c in v:
            out_file.write(" " + str(c))
        out_file.write("\n")
    out_file.write("# Face Definitions:\n")
    for f in FV:
        out_file.write("f")
        for v in f:
            out_file.write(" " + str(v+1))
        out_file.write("\n")
    out_file.close()

def extractFacets(master, emptyChain=[]):
    solidCV = [cell for k,cell in enumerate(master[1]) if not (k in emptyChain)]
    exteriorCV =  [cell for k,cell in enumerate(master[1]) if k in emptyChain]
    exteriorCV += exteriorCells(master)
    CV = solidCV + exteriorCV
    V = master[0]
    FV = [f for f in larFacets((V,CV),3,len(exteriorCV))[1] if len(f) >= 4]
    BF = boundaryCells(solidCV,FV)
    boundaryFaces = [FV[face] for face in BF]
    B_Rep = V,boundaryFaces
    return B_Rep




master = assemblyDiagramInit([13,9,2])([[.2,1,.2,4,.2,1,.2,2,.2,2,.2,4,.2],[.2,3,.2,1,.2,1,.2,3,.2],[.2,3]])

diagram1 = assemblyDiagramInit([5,1,4])([[1,1.5,.5,.75,.25],[.2],[1.4,.6,.7,.3]])
diagram2 = assemblyDiagramInit([3,1,3])([[1.25,1.5,1.25],[.2],[1.25,1.35,.4]])
diagram3 = assemblyDiagramInit([3,1,3])([[.25,1.5,.25],[.2],[1.4,1.3,.3]])
diagram4 = assemblyDiagramInit([3,1,3])([[.6,.8,.6],[.2],[1.25,1.35,.4]])
diagram5 = assemblyDiagramInit([3,1,3])([[.6,.8,.6],[.2],[1.25,1.35,.4]])
diagram6 = assemblyDiagramInit([3,1,3])([[1.25,1.5,1.25],[.2],[1.25,1.35,.4]])
diagram7 = assemblyDiagramInit([1,3,3])([[.2],[1.25,1.5,1.25],[1.25,1.35,.4]])
diagram8 = assemblyDiagramInit([3,1,2])([[.625,.75,.625],[.2],[2.2,.8]])
diagram9 = assemblyDiagramInit([3,1,2])([[.625,.75,.625],[.2],[2.2,.8]])
diagram10 = assemblyDiagramInit([1,3,2])([[.2],[1.125,.75,1.125],[2.2,.8]])
diagram11 = assemblyDiagramInit([1,3,2])([[.2],[1.125,.75,1.125],[2.2,.8]])
diagram12 = assemblyDiagramInit([1,3,2])([[.2],[.15,.7,.15],[2,1]])
diagram13 = assemblyDiagramInit([1,3,2])([[.2],[.15,.7,.15],[2,1]])





hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)
 
master = diagram2cell(diagram2,master,215)
master = diagram2cell(diagram1,master,203)
master = diagram2cell(diagram4,master,179)
master = diagram2cell(diagram8,master,171)
master = diagram2cell(diagram3,master,167)
master = diagram2cell(diagram5,master,143)
master = diagram2cell(diagram9,master,139)
master = diagram2cell(diagram12,master,119)
master = diagram2cell(diagram13,master,115)
master = diagram2cell(diagram11,master,87)
master = diagram2cell(diagram6,master,71)
master = diagram2cell(diagram10,master,51)
master = diagram2cell(diagram7,master,39)





hpc = SKEL_1(STRUCT(MKPOLS(master)))
hpc = cellNumbering (master,hpc)(range(len(master[1])),CYAN,2)
#VIEW(hpc)

emptyChain = [203,204,205,206,187,188,189,190,169,170,171,172,154,155,156,157,136,137,138,139,120,
                    121,122,123,242,243,235,236,193,195,197,199,201,225,176,160,143,261,163,165,
                    167,254,127,129,131,285,134,278,269,297,291,93,97,80,76,89,72,55,326,91,74,57,
                    76,59,63,65,67,101,303,0,1,2,3,21,18,4,5,6,7,23,24,25,22,20,19,33,318,311,29,31]


master_facets = extractFacets(master,emptyChain)



master_facets_tria = quads2tria(master_facets)


objExporter(master_facets_tria,"/home/matteo/casa.obj")