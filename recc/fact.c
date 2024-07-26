#include<stdio.h>
int fact(int n){
    if( n ==  1 ||  n ==0) return 1 ;
    return n* fact(n-1);
}
int main(){
    int n = 5 ;
    int ans = fact(n);
    printf("%d",ans);

}