#include <stdio.h>
void countdown(int);
int main(void)  {
countdown(3);
    return 0;
}

void countdown (int n) {
     if (n <= 0)
        printf("Blastoff!\n" );   
    else {
        printf("%d\n" , n);
        countdown(n-1) ;
   }    
 
}
