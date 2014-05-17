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
from architectural import *


DRAW = COMP([VIEW,STRUCT,MKPOLS])

master = assemblyDiagramInit([13,9,2])([[.2,1,.2,4,.2,1,.2,2,.2,2,.2,4,.2],[.2,3,.2,1,.2,1,.2,3,.2],[.2,3]])
V,CV = master


toRemove = [33,31,29,25,21,19,20,18,0,1,2,3,21,69,65,105,101,67,83,31,24,6,4,22,23,7,5,57,59,61,75,77,79,93,
			95,97,137,141,133,135,173,175,177,129,147,165,183,201,199,219,217,164,182,146,218,127,145,163,
			128,146,164,182,200,126,144,162,180,198,216,181,213,211,209,207,205,169,187,151]
master = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
#DRAW(master)



#porta ingresso e finestra ingresso
toMerge = 139
diagram = assemblyDiagramInit([5,1,4])([[1,1.5,.5,.75,.25],[.2],[1.4,.6,.7,.3]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [172,173,165,166]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#finestra salone
toMerge = 145
diagram = assemblyDiagramInit([3,1,3])([[1.25,1.5,1.25],[.2],[1.25,1.35,.4]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [179]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#finestra corridoio
toMerge = 116
diagram = assemblyDiagramInit([3,1,3])([[.25,1.5,.25],[.2],[1.4,1.3,.3]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [186]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#finestra cucina
toMerge = 123
diagram = assemblyDiagramInit([3,1,3])([[.6,.8,.6],[.2],[1.25,1.35,.4]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [193]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#finestra bagno
toMerge = 101
diagram = assemblyDiagramInit([3,1,3])([[.6,.8,.6],[.2],[1.25,1.35,.4]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [200]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#finestra camera letto1
toMerge = 46
diagram = assemblyDiagramInit([3,1,3])([[1.25,1.5,1.25],[.2],[1.25,1.35,.4]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [207]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#finestra camera letto2
toMerge = 20
diagram = assemblyDiagramInit([1,3,3])([[.2],[1.25,1.5,1.25],[1.25,1.35,.4]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [214]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#porta cucina
toMerge = 115
diagram = assemblyDiagramInit([3,1,2])([[.625,.75,.625],[.2],[2.2,.8]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [219]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#porta bagno1
toMerge = 96
diagram = assemblyDiagramInit([3,1,2])([[.625,.75,.625],[.2],[2.2,.8]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [223]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#porta ripostiglio
toMerge = 31
diagram = assemblyDiagramInit([1,3,2])([[.2],[1.125,.75,1.125],[2.2,.8]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [227]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#porta bagno2
toMerge = 55
diagram = assemblyDiagramInit([1,3,2])([[.2],[1.125,.75,1.125],[2.2,.8]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [231]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#porta camera1
toMerge = 81
diagram = assemblyDiagramInit([1,3,2])([[.2],[.15,.7,.15],[2,1]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [235]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)


#porta camera2
toMerge = 77
diagram = assemblyDiagramInit([1,3,2])([[.2],[.15,.7,.15],[2,1]])
master = diagram2cell(diagram,master,toMerge)
toRemove = [239]
master = master[0], [cell for k,cell in enumerate(master[1]) if not (k in toRemove)]
#DRAW(master)

#fine esercizio1

#exercise2


def dis(pol):
	hpc=SKEL_1(STRUCT(MKPOLS(pol)))
	hpc = cellNumbering (pol,hpc)(range(len(pol[1])),CYAN,1)
	return hpc



house2 = larApply(t(0,0,0))(master)
house2 = larApply(s(1,-1,1))(house2)

#DRAW(house2)

building=assemblyDiagramInit([1,2,4])([[14],[8,8],[3,3,3,3]])

hpc_building=dis(building)

#VIEW(hpc_building)

building = diagram2cell(house2,building,0)

building = diagram2cell(house2,building,0)
building = diagram2cell(house2,building,0)
building = diagram2cell(house2,building,0)

building = diagram2cell(master,building,0)
building = diagram2cell(master,building,0)
building = diagram2cell(master,building,0)
building = diagram2cell(master,building,0)


#VIEW(hpc_building)
build = STRUCT(MKPOLS(building))
#VIEW(build)
#imposto i vertici
V = [[10,5],[14,5],[14,11],[10,11]]
#imposto le figure
FV = [[0,1,2,3]]
dwelling = [V,FV]
#V,FV = larApply(t(3,0))(dwelling)

#VIEW(EXPLODE(1,1,1)(MKPOLS(dwelling)))


plan = Struct([dwelling])

assembly2D = evalStruct(plan)
#assembly1D = larCells(face2edge)(assembly2D)


#costruisco pavimento e i 6 piani
#mod_1 = larQuote1D( 4*[0.2,-2.8] )
#assembly3D = larBinOps(larModelProduct)(assembly2D)(mod_1)
#VIEW(EXPLODE(1,1,1)(CAT(AA(MKPOLS)(assembly3D))))

#ottengo i piani con pavimenti pieni
horClosures = horizontalClosures([0.2,-2.8]*4 +[0.2])(assembly2D)
pianerottoli = STRUCT(horClosures)

stair = spiralStair(width=0.2,R=1.5,r=0.25,riser=0.1,pitch=3.4,nturns=1.75,steps=36)
stair = larApply(r(0,0,3*PI/4))(stair)
stair = larApply(t(0,-3,0))(stair)
stairColumn = larApply(t(0,-3,0))(larRod(0.25,3.8)())
scale = evalStruct(Struct([stairColumn,stair,t(0,0,3)]*4))
scale = STRUCT(CAT(AA(MKPOLS)(scale)))
VIEW(scale)
#scale = SCALE([1,2])([.5,.5])(scale)
scale = T([1,2])([12,11])(scale)
VIEW(STRUCT([build,pianerottoli,scale]))