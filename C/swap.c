#include <stdio.h>

void swap(int x, int y);

int main(void) {
	int num1, num2;
	num1 = 22;
	num2 = 50;
	printf("Inside MAIN function: values of num1 and num2 BEFORE SWAP is called: %d  %d\n", num1, num2);
	swap(num1, num2);
	printf("Inside MAIN function: values of num1 and num2 AFTER SWAP is called: %d  %d\n", num1, num2);
	
	return 0;
}


void swap(int x, int y) {
	int temp;
	printf("Inside SWAP function: values of x and y BEFORE they are swapped: %d  %d\n", x, y);
	temp = x;
	x = y;
	y = temp;
	printf("Inside SWAP function: values of x and y AFTER they are swapped: %d  %d\n", x, y);

}