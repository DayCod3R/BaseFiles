#include <stdio.h>
int strlen (char * s);
int main(void) {
	/*int i;
	char str[4][10] = {"C is fun!", "Java", "Python", "LISP" };
	char * str_2[4] = {"C is fun!", "Java", "Python", "LISP" };
	for(i=0; i < 4; i++) {
		printf("String is: %c\n", str[i][0]);
	}*/

	char string[100] = "Holiday Season is around the Corner.";
	int length;
	length = strlen(string);
	printf("Length is: %d\n", length);
	return 0;
}



//define string length function

int strlen (char * s) {
	int len;
	for(len = 0; *s != '\0' ; s++) {
		len++;
	}
	printf("my home-made function\n");
	return len;
}

// second version
int strlen_2(char * s) {
	char * p = s;
	while(*p != '\0') {
		p++;

	}
	return p - s;

}