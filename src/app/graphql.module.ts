import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Apollo
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { environment } from '../environments/environment';

@NgModule({
  exports: [HttpClientModule],
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    // create Apollo
    apollo.create({
      link: httpLink.create({ uri: environment.apiUrl }),
      cache: new InMemoryCache(),
      // resolvers: {
      //   Post: {
      //     async isPublic(r, args, ctx) {
      //       // console.log({ r, args, ctx });

      //       return new Promise((resolve) => {
      //         setTimeout(() => {
      //           resolve(true);
      //         }, 500);
      //       });
      //     },
      //   },
      // },
    });
  }
}
