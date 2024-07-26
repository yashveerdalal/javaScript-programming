#include<stdio.h>
int number( int a){
    if (  a == 0 ) return 0;
     printf("%d\n",a);
    return number(a-1);
   

}
int main(){
    int n = 5;
    number(n);
    


}