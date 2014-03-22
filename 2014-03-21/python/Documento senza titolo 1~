from pyplasm import *


def traslateVector(coord,values):
	return T(coord)(values)

def extrude(obj,z):
	return PROD([obj, Q(z)])


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

interno = STRUCT([T([1,2])([1.35,(.45+(2*4.38)+(2*1.35))])(floor_p1), T([1,2])([1.35,(.45+(5*4.38)+(5*1.35))])(floor_p1), T([1,2])([(2*1.35)+(2*4.38),(.45+(2*4.38)+(2*1.35))])(floor_p3),  T([1,2])([(2*1.35)+(2*4.38),(.45+(4*4.38)+(4*1.35))])(floor_p3),  T([1,2])([(4*1.35)+(4*4.38),(.45+(2*4.38)+(2*1.35))])(floor_p3),  T([1,2])([(4*1.35)+(4*4.38),(.45+(4*4.38)+(4*1.35))])(floor_p3), T([1,2])([(7*1.35)+(7*4.38),(.45+(2*4.38)+(2*1.35))])(floor_p3), T([1,2])([(7*1.35)+(7*4.38),(.45+(4*4.38)+(4*1.35))])(floor_p3),  T([1,2])([(1.35),(.45+(3*4.38)+(3*1.35))])(floor_p2), T([1,2])([(1.35),(.45+(4*4.38)+(4*1.35))])(floor_p2), T([1,2])([(4*1.35)+(4*4.38),(.45+(3*4.38)+(3*1.35))])(floor_p4),  T([1,2])([(4*1.35)+(4*4.38),(.45+(4*4.38)+(4*1.35))])(floor_p4), T([1,2])([(7*1.35)+(6*4.38),((2*.45)+(3*4.38)+(3*1.35))])(floor_p5),  T([1,2])([(7*1.35)+(6*4.38),((2*.45)+(3*4.38)+(3*1.35)+3.3)])(floor_p5)  ])


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

#ho i piani generici floor0 e tetto floor1(da rinominare)

two_and_a_half_model = building

building = STRUCT([floor0, T(3)([9.93])(floor0), T(3)([9.93+8.83])(floor0), T(3)([9.93+(8.83*2)])(floor0), T(3)([9.93+(8.83*3)])(floor0), T(3)([9.93+(8.83*4)])(floor0), T(3)([9.93+(8.83*4)+(14.72)])(floor1)])



#exercise2


