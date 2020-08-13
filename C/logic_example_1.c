#include<stdio.h>
int main(void) {
	int num1, num2;
	char answer;
	printf("Enter the first number: \t");
	scanf("%d", &num1);
	//printf("Enter the second number: \t");
	//scanf("%d", &num2);
	answer=(num1%2==0)?'E':'O';
	printf("%c\n", answer);

	return 0;
}