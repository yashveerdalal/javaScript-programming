#include<stdio.h>
void number(int n){
    if (n == 0 )
    {
        return ;
    }
    printf("%d\n",n);
    number( n -1);
    printf("%d\n",n);
    
}
int main(){
    int n = 90;
    number(5);
}