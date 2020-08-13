/*************************************/
/*** Author: Frank Ravanshad       ***/
/*** Project: Datatype sizes       ***/
/*** Date Last Modified: 02/09/2011 ***/
/*************************************/

#include <stdio.h>

int main(void) {
	
	//printf("Size of short: %d\n", sizeof(short));
	//printf("Size of int: %d\n", sizeof(int));
	//printf("Size of long: %d\n", sizeof(long));

	short sam = 32768;
	unsigned short sue = sam;
	printf("Sam = %d\n", sam);
	printf("Sue = %d\n", sue);
	// add one to both sam and sue
	sam = sam + 1;
	sue = sue + 1;
	printf("Sam + 1 = %d\n", sam);
	printf("Sue + 1 = %d\n", sue);
	// set sam and sue to 0
	sam = 0; 
	sue = 0;
	printf("Sam 0 = %d\n", sam);
	printf("Sue 0 = %d\n", sue);
	// subtract one from sam and sue
	sam = sam - 1;
	sue = sue -1;
	printf("Sam -1 = %d\n", sam);
	printf("Sue -1 = %d\n", sue);

                           
	return 0; 
}
