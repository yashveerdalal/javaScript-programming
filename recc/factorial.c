#include<stdio.h>
int fact( int a){
    if ( a == 0 || a == 1 ) return 1;
    return a*fact(a-1);

}
int main(){
    int n = 5;
    int factorial = fact(n);
    printf("%d",factorial);


}