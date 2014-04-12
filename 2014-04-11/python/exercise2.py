
from pyplasm import *


def traslateVector(coord,values):
	return T(coord)(values)

def extrude(obj,z):
	return PROD([obj, Q(z)])

def semicircle(r):
	def ball(p):
 		a,r = p
		return [r*COS(a), r*SIN(a)]
	dom2D = PROD([INTERVALS(PI)(50), INTERVALS(1)(1)])
	return S([1,2])([r,r])(MAP(ball)(dom2D))

def rgb(color):
	return [color[0]/255.0, color[1]/255.0, color[2]/255.0]

#floor0_2D
base_1 = CUBOID([53,53])
base_3 = T([1,2])([(3*1.35)+(2*4.38)+5.73,(.9)+(3*1.35)+(3*4.38)])(CUBOID([(2*4.38)+1.35,.9+(3*4.38)+(2*1.35)]))
diff = DIFFERENCE([base_1,base_3])


quad = COLOR(BLACK)(CUBOID([1.35,1.35]))



quadrati_lato1 = STRUCT([quad,STRUCT(NN(9)([traslateVector([1],[4.38+1.35]),quad]))])

quadrati_lato2 = STRUCT([quad,STRUCT(NN(9)([traslateVector([2],[4.38+1.35]),quad]))])

quadrati_lato3 = STRUCT([quad,STRUCT(NN(9)([traslateVector([1],[4.38+1.35]),quad]))])
quadrati_lato3_t = T([1,2])([0,53-1.35])(quadrati_lato3)

quadrati_lato4 = STRUCT([quad,STRUCT(NN(9)([traslateVector([2],[4.38+1.35]),quad]))])
quadrati_lato4_t = T([1,2])([53-1.35,0])(quadrati_lato4)


quadrati_latoInt1 = STRUCT([quad,STRUCT(NN(7)([traslateVector([1],[4.38+1.35]),quad]))])
quadrati_latoInt1_t = T([1,2])([1.35+4.38,1.35+4.38])(quadrati_latoInt1)

quadrati_latoInt2 = STRUCT([quad,STRUCT(NN(7)([traslateVector([2],[4.38+1.35]),quad]))])
quadrati_latoInt2_t = T([1,2])([1.35+4.38,1.35+4.38])(quadrati_latoInt2)


quadrati_latoInt3 = STRUCT([quad,STRUCT(NN(7)([traslateVector([1],[4.38+1.35]),quad]))])
quadrati_latoInt3_t = T([1,2])([1.35+4.38,53-(2*1.35)-4.38])(quadrati_latoInt3)


quadrati_latoInt4 = STRUCT([quad,STRUCT(NN(7)([traslateVector([2],[4.38+1.35]),quad]))])
quadrati_latoInt4_t = T([1,2])([53-(2*1.35)-4.38,1.35+4.38])(quadrati_latoInt4)


floor_p1 = CUBOID([(7*4.38)+(6*1.35),.45])
floor_p2 = CUBOID([(2*4.38)+(2*1.35),(.45)])
floor_p3 = CUBOID([.45,(.45*4)+4.38])
floor_p4 = CUBOID([(4.38*3)+(1.35*3),.45])
floor_p5 = CUBOID([.45,2])

parete1 = T([1,2])([1.35,(.45+(2*4.38)+(2*1.35))])(floor_p1)
parete2 =  T([1,2])([1.35,(.45+(5*4.38)+(5*1.35))])(floor_p1)
parete3 = T([1,2])([(2*1.35)+(2*4.38),(.45+(2*4.38)+(2*1.35))])(floor_p3)
parete4 = T([1,2])([(2*1.35)+(2*4.38),(.45+(4*4.38)+(4*1.35))])(floor_p3)
parete5 = T([1,2])([(4*1.35)+(4*4.38),(.45+(2*4.38)+(2*1.35))])(floor_p3)
parete6 = T([1,2])([(4*1.35)+(4*4.38),(.45+(4*4.38)+(4*1.35))])(floor_p3)
parete7 = T([1,2])([(7*1.35)+(7*4.38),(.45+(2*4.38)+(2*1.35))])(floor_p3)
parete8 = T([1,2])([(7*1.35)+(7*4.38),(.45+(4*4.38)+(4*1.35))])(floor_p3)
parete9 =  T([1,2])([(1.35),(.45+(3*4.38)+(3*1.35))])(floor_p2)
parete10 = T([1,2])([(1.35),(.45+(4*4.38)+(4*1.35))])(floor_p2)
parete11 = T([1,2])([(4*1.35)+(4*4.38),(.45+(3*4.38)+(3*1.35))])(floor_p4)
parete12 = T([1,2])([(4*1.35)+(4*4.38),(.45+(4*4.38)+(4*1.35))])(floor_p4)
parete13 = T([1,2])([(7*1.35)+(6*4.38),((2*.45)+(3*4.38)+(3*1.35))])(floor_p5)
parete14 = T([1,2])([(7*1.35)+(6*4.38),((2*.45)+(3*4.38)+(3*1.35)+3.3)])(floor_p5)  



interno = STRUCT([parete1, parete2, parete3, parete4  , parete5,  parete6, parete7,parete8, parete9, parete10, parete11,  parete12, parete13,  parete14])


interno_ex = extrude(interno, 1)
interno_ex_col = COLOR(BLUE)(interno_ex)
interno_col_t = T([1,2])([(1.35)+(4.38),(1.35)+(4.38)])(interno_ex_col)

floor0 = STRUCT([diff, interno_col_t, COLOR(BLACK)(quadrati_lato1), COLOR(BLACK)(quadrati_lato2), COLOR(BLACK)(quadrati_lato3_t), COLOR(BLACK)(quadrati_lato4_t), COLOR(BLACK)(quadrati_latoInt1_t), COLOR(BLACK)(quadrati_latoInt2_t), COLOR(BLACK)(quadrati_latoInt3_t), COLOR(BLACK)(quadrati_latoInt4_t)])


#VIEW(generic_floor)


#floor1_2D

base_1 = CUBOID([53,53])
base_2 = COLOR(GRAY)(T([1,2])([1.35+4.38,1.35+4.38])(CUBOID([(7*4.38)+(8*1.35), (7*4.38)+(8*1.35)])))
base_3 = T([1,2])([(3*1.35)+(2*4.38)+5.73,(.9)+(3*1.35)+(3*4.38)])(CUBOID([(2*4.38)+1.35,.9+(3*4.38)+(2*1.35)]))

appo = COLOR(GRAY)(extrude(DIFFERENCE([base_2,base_3]),2.57))
appo2 = DIFFERENCE([base_1,base_3])
floor1 = STRUCT([appo2,appo])

#ho i piani generici floor0 e tetto floor1



building = STRUCT([floor0, T(3)([9.93])(floor0), T(3)([9.93+8.83])(floor0), T(3)([9.93+(8.83*2)])(floor0), T(3)([9.93+(8.83*3)])(floor0), T(3)([9.93+(8.83*4)])(floor0), T(3)([9.93+(8.83*4)+(14.72)])(floor1)])

two_and_a_half_model = building



#creo arco
b = CUBOID([4.38,4.04])
s = T([1,2])([2.19,4.04])(semicircle(2.21))
arco = (STRUCT([b,s])) 

#mura

fila_1 = STRUCT( [arco, STRUCT(NN(8)([traslateVector( [1], [1.35+4.38 ]),arco])) ])
fila_1_t = COLOR(BLACK)(T([1])([1.35])(fila_1))



c1 = CUBOID([53,9.93])
c2 = CUBOID([53,8.83])
c3 = CUBOID([53,14.72])

floor_0 = STRUCT([c1, fila_1_t])
floor_1 = STRUCT([c2,fila_1_t]) 
floor_2 = STRUCT([c2,fila_1_t])
floor_3 = STRUCT([c2,fila_1_t])
floor_4 = STRUCT([c2,fila_1_t])
floor_5 = STRUCT([c3,fila_1_t])

north = STRUCT([floor_0, T([2])([9.93])(floor_1),T([2])([9.93+8.83])(floor_2),T([2])([9.93+(8.83*2)])(floor_3),T([2])([9.93+(8.83*3)])(floor_4),T([2])([9.93+(8.83*4)])(floor_5)]) 

south =T([3])([-53])( north)

east = R([1,3])(-PI/2)(north )

west = T([1])([53])(east)


two_and_a_half_model_r = R([2,3])(-PI/2)(two_and_a_half_model)

mock_up_3D = STRUCT([north,two_and_a_half_model_r,south, east, west])




main_cube = CUBOID([53,60,53])

fila_1_solid = extrude(fila_1_t, 53)

archi_solid = COLOR(BLACK)(STRUCT([fila_1_solid,T([2])([9.93])(fila_1_solid),T([2])([9.93+8.83])(fila_1_solid),T([2])([9.93+(8.83*2)])(fila_1_solid),T([2])([9.93+(8.83*3)])(fila_1_solid),T([2])([9.93+(8.83*4)])(fila_1_solid)] )   )

archi_solid_r = T([3])([53])(R([1,3])(-PI/2)(archi_solid))

top_cube =  R([2,3])(-PI/2)(COLOR(GRAY)(T([1,2])([1.35+4.38,1.35+4.38-53])(CUBOID([(7*4.38)+(8*1.35), (7*4.38)+(8*1.35),(60+2.57)]))))


solid_model_3D = STRUCT([main_cube, archi_solid, archi_solid_r, top_cube])


max = 0.60
min = 0.60

step2D = MKPOL([[[0,0],[0,min],[max,min/2],[max,min]],[[1,2,3,4]],None])
step3D = PROD([step2D,Q(2)])
step3D = MAP([S1,S3,S2])(step3D)
ramp = STRUCT(NN(32)(([step3D,T([1,3])([max,min/2])])))
stair = R([2,3])(-PI/2)(T([1,2,3])([10,(5*1.35)+(4*4.38)+3,0])(ramp))


mock_up_3D = STRUCT([mock_up_3D, stair])


#inizio homework2, tutto il codice precedente appartiene all'homework 1 e costituisce la costruzione dell'edificio


#exercise1

#utilizzo le pareti del modello 2,5D creato precedentemente


interno3D = STRUCT([parete1, parete2, parete3, parete4  , parete5,  parete6, parete7,parete8, parete9, parete10, parete11,  parete12, parete13,  parete14])


interno3D_ex = extrude(interno3D, 60)
interno3D_ex_col = COLOR(GRAY)(interno3D_ex)
interno3D_col_t = T([1,2])([(1.35)+(4.38),(1.35)+(4.38)])(interno3D_ex_col)

cubo_ext = (CUBOID([41.54,41.54,60]))
cubo_int = T([1,2])([1.35,1.35])(CUBOID([38.84,38.84,60]))

celeste = rgb([176,224,230,0.1])

guscio_interno =COLOR(celeste) (T([1,2])([5.73,5.73])(DIFFERENCE([cubo_ext,cubo_int])))



floor0_3D = STRUCT([diff,  COLOR(BLACK)(quadrati_lato1), COLOR(BLACK)(quadrati_lato2), COLOR(BLACK)(quadrati_lato3_t), COLOR(BLACK)(quadrati_lato4_t), COLOR(BLACK)(quadrati_latoInt1_t), COLOR(BLACK)(quadrati_latoInt2_t), COLOR(BLACK)(quadrati_latoInt3_t), COLOR(BLACK)(quadrati_latoInt4_t)])




#floor1_3D

base_1 = CUBOID([53,53])
base_2 = COLOR(GRAY)(T([1,2])([1.35+4.38,1.35+4.38])(CUBOID([(7*4.38)+(8*1.35), (7*4.38)+(8*1.35)])))
base_3 = T([1,2])([(3*1.35)+(2*4.38)+5.73,(.9)+(3*1.35)+(3*4.38)])(CUBOID([(2*4.38)+1.35,.9+(3*4.38)+(2*1.35)]))

appo = COLOR(GRAY)(extrude(DIFFERENCE([base_2,base_3]),2.57))
appo2 = DIFFERENCE([base_1,base_3])
floor1_3D = STRUCT([appo2,appo])

#ho i piani generici floor0 e tetto floor1



floor3D = STRUCT([guscio_interno, interno3D_col_t,floor0_3D, T(3)([9.93])(floor0_3D), T(3)([9.93+8.83])(floor0_3D), T(3)([9.93+(8.83*2)])(floor0_3D), T(3)([9.93+(8.83*3)])(floor0_3D), T(3)([9.93+(8.83*4)])(floor0_3D), T(3)([9.93+(8.83*4)+(14.72)])(floor1_3D)])





#exercise2

fila_1 = STRUCT([arco, STRUCT(NN(8)([traslateVector( [1], [1.35+4.38 ]),arco])) ])   
fila_1_t = COLOR(BLACK)((extrude((T([1])([1.35])(fila_1)),5.73)))



c1 = CUBOID([53,9.93,5.73])
c2 = CUBOID([53,8.83,5.73])
c3 = CUBOID([53,14.72,5.73])

floor_0 = STRUCT([c1, fila_1_t])
floor_1 = STRUCT([c2,fila_1_t]) 
floor_2 = STRUCT([c2,fila_1_t])
floor_3 = STRUCT([c2,fila_1_t])
floor_4 = STRUCT([c2,fila_1_t])
floor_5 = STRUCT([c3,fila_1_t])

parete = STRUCT([floor_0, T([2])([9.93])(floor_1),T([2])([9.93+8.83])(floor_2),T([2])([9.93+(8.83*2)])(floor_3),T([2])([9.93+(8.83*3)])(floor_4),T([2])([9.93+(8.83*4)])(floor_5)])

north = T([3])([-5.73])(parete) 

south =T([3])([-53])(parete)

east = R([1,3])(-PI/2)(parete )

west = T([1])([53-5.73])(east)     

guscio_interno_2 = R([2,3])(-PI/2)(guscio_interno) 

pareti_tetto_ext = CUBOID([41.54,41.54,2.57])
pareti_tetto_int = T([1,2])([1.35,1.35])(CUBOID([38.84,38.84,2.57]))
pareti_tetto_trasl = COLOR(GRAY)(R([2,3])(-PI/2)(T([1,2,3])([5.73,5.73,60])(DIFFERENCE([pareti_tetto_ext,pareti_tetto_int]))))

pareti3D = STRUCT([north,south, east, west,guscio_interno_2, pareti_tetto_trasl])

VIEW(pareti3D)
#non ho potuto utilizzare DIFFERENCE al posto di STRUCT poiche' avrebbe impoegato un tempo molto alto per produrre la struttura anche se il risultato sarebbe stato migliore




