#include <stdio.h>

int is_odd_even(int );   //function prototype
int power(int base, int exp);  // function prototype
int find_factorial(int num);  // function prototype

int main(void) {
	int x, y, answer;
	//printf("Enter a number for base: \t");
	//scanf("%d", &x);

	//printf("Enter a number for exponent: \t");
	//scanf("%d", &y);

	printf("Enter a whole number : \t");
	scanf("%d", &y);
	answer = find_factorial(y);
	printf("Factorial of %d is: %d\n", y, answer);

	//call the function
	/*result = is_odd_even(x); 
	if(result == 0)
		printf("%d is ODD!\n", x);
	else
		printf("%d is EVEN!\n", x); */
	//answer = power(x, y);
	//printf("%d raised to power of %d =  %d\n", x, y, answer);

	return 0;
}


// the function retunrs non-zero values if num is even
// returns zero otherwise

int is_odd_even(int num){
	if(num%2==0)
		return 1;
	else
		return 0;	

}

int power(int base, int exp) {
	int result = 1;
	int i;
	for(i = 0; i < exp; i++) {
		result = base * result;
	}
	return result;
}

int find_factorial(int num) {
	int factorial =1;
	int i;
	for(i=1; i<=num; i++) {
		factorial = factorial * i;
	}
	return factorial;
}