import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Producto } from 'src/models/producto.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public productos!: Observable<Producto[]>;
  private productoCollection!: AngularFirestoreCollection<Producto>;

  constructor(private firestore: AngularFirestore) {
    this.productoCollection = firestore.collection<Producto>('productos');
    this.obtenerProductos();
  }
  // ➡️ obtains products
  obtenerProductos() {
    this.productos = this.productoCollection!.snapshotChanges().pipe(
      map(action => action.map(a => a.payload.doc.data() as Producto))
    );
  }
  // ➡️ create a new product
  public createProducto(prod: Producto): Promise<void> {
    return new Promise(async (resolve, reject)=> {
      try {
        const id = this.firestore.createId();
        prod.id = id;
        const result = await this.productoCollection?.doc(id).set(prod);
        resolve(result)
      } catch (err) { // if a bad thing happens, CATCH IT!
        reject (err)
      }
    } )
  }
  // ➡️ obtains a product
  public getProductoById(prodId: string) {
    return this.firestore.collection('productos').doc(prodId).snapshotChanges();
  }
  // ➡️ update a product
  public updateProducto(prodId: string, data: any) {
    return this.firestore.collection('productos')//--
  }

}
