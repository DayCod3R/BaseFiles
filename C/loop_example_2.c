#include <stdio.h>
int main(void) {
	int x, y;
	for(x=0, y=5; x<5 && y>=0; x++,y--){
		printf("x= %d y= %d\n", x, y);
		//if(y==3)
			//continue;
		printf("x= %d y= %d\n", x, y);
	}

	return 0;
}