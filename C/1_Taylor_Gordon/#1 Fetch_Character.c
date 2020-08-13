#include<stdio.h>

void fetch_n_characters(char arr[], int size, int n) {
	int i = 0;
	char ch;
	printf("Enter some Charaters. Press CTRL-Z and ENTER to end program:\n");
	while ((ch=getchar()) !=EOF) {
		arr[i] = ch; 
		i++;
		if (i == n)
			break;
		if (i == size) {
			printf("Array has reached maximum limit.\n");
			break;
		}
	}

}