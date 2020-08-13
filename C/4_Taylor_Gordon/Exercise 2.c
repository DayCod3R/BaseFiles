#include <stdio.h>

int main(void) {
	
	
	double MainArray[5] = {1.1, 2.2, 3.3, 4.4, 5.5};
	printf("The values in MainArray are: %f\n", MainArray[5]);
	double * Target1;
	double * Target2;
	
	
	Target1 = MainArray;
	Target2 = &Target1;
	printf("The values in MainArray are: %f\n", MainArray[5]);
	printf("The values in Target1 are: %f\n", Target1);
	printf("The values in Target2 are: %f\n", Target2);
	
	printf("End of Program.\n");
	
	
	return 0;
	}
	