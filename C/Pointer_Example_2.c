#include <stdio.h>
int main(void){
	int * pr1, * pr2, * pr3, * pr4, * pr5, * pr6;
	int arr[] = {3, 15, 10, 7, 55, 4, 1, 9, 11, 5};
	pr1 = arr; 
	pr2 = arr; 
	pr3 = arr; 
	pr4 = arr; 
	pr5 = arr; 
	pr6 = arr; 

	printf("*pr1++ : %d\n", *pr1++);
	printf("*(pr2++) : %d\n", *(pr2++));
	printf("++(*pr3) : %d\n", ++(*pr3));
	printf("++*pr4 : %d\n", ++*pr4);
	printf("(*pr5)++ : %d\n", (*pr5)++);
	printf("*++pr6 : %d\n", *++pr6);

	return 0;
}