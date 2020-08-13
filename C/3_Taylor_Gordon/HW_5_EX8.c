/**Exercise_8**/

#include <stdio.h>
#define STOP '5'
int main(void) {               
char ch;
printf("***************************************************************** \n" "Enter the number corresponding to the desired pay rate or action: \n"
"1) $8.75/hr		2)$9.33/hr \n" "3)$10.00/hr		4)$11.20/hr \n" "5) quit \n""***************************************************************** \n"); 

	scanf("%c", &ch);
    // use switch statement
	switch(ch) {
	case '1':
	case '2':
	case '3':
	case '4':
		printf("How many hours worked? \n");
		break;
	case '5':
		printf("No longer employed. \n");
		break;
	default:
		printf("You entered an invalid choice \n");
	}
	return 0;
}