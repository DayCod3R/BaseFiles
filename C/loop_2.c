#include <stdio.h>
int main(void)  {	

    int outer; 
    int inner;
    for(outer=1; outer<=5; outer++)  {
      for(inner=1;inner<=outer;inner++)
	  printf("%d", inner);
      printf("\n");
    }	
		
	
    return 0;

}

 