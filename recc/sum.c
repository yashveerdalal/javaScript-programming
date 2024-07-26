#include<stdio.h>
int sum( int n){
    if ( n == 0 || n == 1) return 1;
    int ans = n + sum(n-1);
    return ans;
}
int main(){
    int n =10;
 int anss =    sum(10);
 printf("%d",anss);
    
}