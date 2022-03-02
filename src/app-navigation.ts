type NavigationType={
  text: string,
  path: string,
  icon: string,
  items?:Array<NavigationType>|[]
}


export const navigation:Array<NavigationType> = [
  
    {
      text: 'Anasayfa',
      path: '/home',
      icon: 'home'
    },
    {
      text: 'Kategoriler',
      path: '/all-categories',
      icon: 'tasks'
    },
    
];
  