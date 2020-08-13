#include<stdio.h>
int main(void)
{
	char ch;
	scanf("%c", &ch);
	for(int row=0; row<6;row++){
				for(int col=((int)ch+row);col<((int)ch+6);col++){
					printf("%c", col);
				}
				printf("\n");
			}
	return 0;

}