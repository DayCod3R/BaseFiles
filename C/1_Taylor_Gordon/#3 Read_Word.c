#include<stdio.h>

void read_word(char arr[], int size){

	int i = 0;
	char ch;
	printf("Enter some Charaters. Press CTRL-Z and ENTER to end program:\n");
	while ((ch=getchar()) !=EOF) {
		if (ch == ' ')
			break;
		arr[i] = ch;
		i++;
		if (i == size) {
			printf("Array has reached maximum limit.\n");
			break;
		}
	}
}