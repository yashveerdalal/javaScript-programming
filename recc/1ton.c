#include<stdio.h>
void number( int a, int b  ){
    if( a == 0) return ;
    printf("%d\n",b);
    number( a -1 , b+1);
    
}
int main(){
    int n = 10 ;
    number( n ,1 );
}