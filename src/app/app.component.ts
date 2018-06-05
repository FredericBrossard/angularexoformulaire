import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titre = 'Carte Identité';

  // objet litéral formulaire qui décrit le formulaire
user = {
  name: 'Votre Nom',
 // imgurl: 'https://s3.amazonaws.com/uifaces/faces/twitter/malykhinv/128.jpg',
  imgurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Colombus_Isle.JPG/1200px-Colombus_Isle.JPG',
  title: 'Buisness Card',
  urgent : true,
  textcolor : 'blue'
};

urgentvar = true;
connected = false;

changeName(textName) {
  this.user.name = textName;
}

changeTitle(textTitle) {
    this.user.title = textTitle;
}

changeImgUrl(textUrl) {
  this.user.imgurl = textUrl;
}
logInputValue (value) {
  console.log('la valeure saisie est :', value);
}

}


