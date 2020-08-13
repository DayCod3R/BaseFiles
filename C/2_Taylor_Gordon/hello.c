#include <stdio.h>
#include <string.h>

/**Exercise_1**/

int main(void) {
	
	for (x = 5; x <= 15; x = x + 1) {
	printf(x\n);

	return 0;
}

/**Exercise_2**/

#include <stdio.h>
int main(void)                /* finds sum of first 20 integers */
{
    int x = 20, count, sum;    /* declaration statement          */

    count = 0;                /* assignment statement           */
    sum = 0;                  /* ditto                          */
    while (count++ <= x)      /* while                          */
        sum = sum + count;    /* statement                  */
    printf("sum = %d\n", sum);/* function statement             */
  
    return 0;
}

	