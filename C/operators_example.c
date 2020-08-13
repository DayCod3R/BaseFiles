#include <stdio.h>
#define LUCK_NUMBER 25
int main(void) {
	const int MY_NUMBER = 300;
	int x, y, z, t, m, n, k;
	x = 5;
	k = 5;
	y = 7;
	z = x/y;
	t = x++;
	m = ++x;
	n = x%y;
	//MY_NUMBER = 500;
	printf("z is : %d \n", z);
	printf("t is : %d\n", t);
	printf("m is : %d\n", m);
	printf("n is : %d\n", n);
	printf("k%%y is : %d\n", k%y);
	return 0;
}
