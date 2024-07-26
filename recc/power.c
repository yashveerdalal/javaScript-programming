#include<stdio.h>
int powr(int a , int b){
    if (b == 0)
    {
        return 1;
    }
    int ans = a * powr(a , b-1);
    return ans;
    
}
int main(){
    int a = 3;
    int b = 2;
    int ans = powr(a,b);
    printf("%d",ans);
}