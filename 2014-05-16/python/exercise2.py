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

def rgb(color):
	return [color[0]/255.0, color[1]/255.0, color[2]/255.0]

def dis(pol):
	hpc=SKEL_1(STRUCT(MKPOLS(pol)))
	hpc = cellNumbering (pol,hpc)(range(len(pol[1])),CYAN,1)
	return hpc

def lampione():
	
	base = COLOR(BLACK)(CYLINDER([0.1,1.8])(20))
	lampada = SPHERE(.2)([20,20])
	lampada = T(3)(1.9)(lampada)
	lampada = COLOR(YELLOW)(lampada)
	lampione = STRUCT([base,lampada])
	return lampione

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


casa2 = larApply(t(0,0,0))(master)
casa2 = larApply(s(1,-1,1))(casa2)

#DRAW(casa2)

building=assemblyDiagramInit([1,2,4])([[14],[8,8],[3,3,3,3]])

hpc_building=dis(building)

#VIEW(hpc_building)

building = diagram2cell(casa2,building,0)

building = diagram2cell(casa2,building,0)

building = diagram2cell(casa2,building,0)

building = diagram2cell(casa2,building,0)

building = diagram2cell(master,building,0)

building = diagram2cell(master,building,0)

building = diagram2cell(master,building,0)

building = diagram2cell(master,building,0)

#DRAW(building)
#facciata palazzo
master1 = assemblyDiagramInit([1,3,15])([[.2],[2,2,2],[2,1,.2,1.3,1,.7,.2,1.3,1,.7,.2,1.3,1,.7,.2]])
V,CV = master1


toRemove = [15,19,23,27]
master1 = V,[cell for k,cell in enumerate(CV) if not (k in toRemove)]
parete_ant = T([1,2,3])([14,5,-.6])(STRUCT(MKPOLS(master1)))
parete_post = T([1,2,3])([10,5,-.6])(STRUCT(MKPOLS(master1)))

#VIEW(parete)

#VIEW(hpc_building)
build = STRUCT(MKPOLS(building))
#VIEW(build)
#imposto i vertici
V = [[10,5],[14,5],[14,7.5],[12,7.5],[12,9.5],[14,9.5],[14,11],[10,11]]
#imposto le figure
FV = [[0,1,2,3,4,5,6,7]]
dwelling = [V,FV]


plan = Struct([dwelling])

assembly2D = evalStruct(plan)


horClosures = horizontalClosures([0.2,-2.8]*4 +[0.2])(assembly2D)
pianerottoli = STRUCT(horClosures)

stair = spiralStair(width=0.2,R=1.5,r=0.25,riser=0.1,pitch=3.4,nturns=1.75,steps=36)
stair = larApply(r(0,0,3*PI/4))(stair)
stair = larApply(t(12,8,0))(stair)
stairColumn = larApply(t(12,8,0))(larRod(0.25,3)())
scale = evalStruct(Struct([stairColumn,stair,t(0,0,3)]*4))
scale = STRUCT(CAT(AA(MKPOLS)(scale)))

pavimento_chiostrina = T([1,2])([6,5])(CUBOID([4,6,.2]))

#TETTO
tetto1 = T([1,2,3])([0,0,12])(CUBOID([1,4,.2]))
tetto2 = T([1,2,3])([1,0,12])(CUBOID([13,5,.2]))
tetto3 = T([1,2,3])([1,5,12])(CUBOID([6,6,.2]))
tetto4 = T([1,2,3])([0,12,12])(CUBOID([1,4,.2]))
tetto5 = T([1,2,3])([1,11,12])(CUBOID([13,5,.2]))
tetto = STRUCT([tetto1,tetto2,tetto3,tetto4,tetto5])


verde = rgb([34,139,34])
prato = COLOR(verde)(CUBOID([30,30,.6]))
prato = T([1,2,3])([-6,-6,-.61])(prato)

dom = (PROD([INTERVALS(1)(30),INTERVALS(1)(30)]))

controls0 = [[14,9.5], [20,6],[22,10], [24,9.5]]
bezier0 = BEZIER(S1)(controls0)
#VIEW(bezier0)


controls1 = [[14,7.5], [20,4],[22,8], [24,7.5]]
bezier1 = BEZIER(S1)(controls1)
#VIEW(STRUCT([bezier1,bezier0]))


ghiaia = rgb([178,178,178])
stradina =COLOR(ghiaia)(MAP(BEZIER(S2)([bezier0,bezier1]))(dom))
#VIEW(stradina)

controls2 = [[15,6.5], [20,3],[22,7], [23,6.5]]
bezier2 = BEZIER(S1)(controls2)
#VIEW(MAP(bezier2)(INTERVALS(1)(32)))


controls3 = [[15,1], [23,1]]
bezier3 = BEZIER(S1)(controls3)
#VIEW(STRUCT([bezier1,bezier0]))

verde_scuro = rgb([0,100,0])
aiuola1 =COLOR(verde_scuro)(MAP(BEZIER(S2)([bezier2,bezier3]))(dom))

controls4 = [[15,10.5], [20,7],[22,11], [23,10.5]]
bezier4 = BEZIER(S1)(controls4)
#VIEW(MAP(bezier2)(INTERVALS(1)(32)))


controls5 = [[15,16], [23,16]]
bezier5 = BEZIER(S1)(controls5)

aiuola2 =COLOR(verde_scuro)(MAP(BEZIER(S2)([bezier4,bezier5]))(dom))

#LAMPIONI
lamp1 = T([1,2])([15,6.5])(lampione())
lamp2 = T([1,2])([15,9.5])(lampione())
lamp7 = T([1,2])([23,10])(lampione())
lamp8 = T([1,2])([23,7])(lampione())
lamps = STRUCT([lamp1,lamp2,lamp7,lamp8])



grigio = rgb([210,210,210])
palazzo = COLOR(grigio)(STRUCT([build,parete_ant,parete_post, pianerottoli,scale,pavimento_chiostrina,tetto]))
VIEW(STRUCT([palazzo,prato,stradina,aiuola1,aiuola2,lamps]))

#fine esercizio 2
