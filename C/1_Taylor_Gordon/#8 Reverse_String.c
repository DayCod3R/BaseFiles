#include<string.h>
void reverse_string(char * str) {

	int i;
	char * p = str, *q = &str[strlen(str) - 1], temp;
	while(p<q) {
		temp = *p;
		*p++ = *q;
		*q-- = temp;
	}
}