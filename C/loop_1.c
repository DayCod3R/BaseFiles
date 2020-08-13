#include <stdio.h>
int main(void)  {	

    int outer; 
    int inner;
    for(outer=5; outer>=1; outer--)  {
      for(inner=5;inner>=outer;inner--)
	  printf("%d", inner);
      printf("\n");
    }	
		
	
    return 0;

}