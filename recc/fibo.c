#include<stdio.h>
int fibo( int n ){
    if( n == 1 || n == 2) return 1;
    int anss = fibo( n- 1);
    int ansss = fibo( n - 2);
    int ANS = anss + ansss;
    return ANS;
}

int main(){
    int  n = 8;
  int Ans =   fibo(n);
  printf("%d",Ans);
}