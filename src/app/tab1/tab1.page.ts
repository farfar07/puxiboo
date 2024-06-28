import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, AnimationController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  @ViewChild(IonModal) modal: IonModal | undefined;

  @ViewChild('iconBag', { read: ElementRef }) icon_bag: ElementRef | undefined;

  // Typically referenced to your ion-router-outlet
  presentingElement: any = null;
  jajanan: any[] = [
    {
      produk: 'Kripset Cikruh',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/kripset.jpg',
      varian: [
        {
          rasa: 'P',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
        },
      ],
    },
    {
      produk: 'Basreng',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/basreng.jpg',
      varian: [
        {
          rasa: 'P',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
        },
      ],
    },
    {
      produk: 'Makaroni Cikruh',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/makcik.jpg',
      varian: [
        {
          rasa: 'P',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
        },
      ],
    },
    {
      produk: 'Cimol',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/cimol.jpg',
      varian: [
        {
          rasa: 'O',
        },
        {
          rasa: 'P',
        },
        {
          rasa: 'E',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 4000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 16000,
        },
      ],
    },
    {
      produk: 'Kripca',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/kripca.jpg',
      varian: [
        {
          rasa: 'O',
        },
        {
          rasa: 'P',
        },
        {
          rasa: 'E',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 8000,
        },
        {
          gramasi: 250,
          harga: 18500,
        },
      ],
    },
    {
      produk: 'Mie Lidi',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/lidi.jpg',
      varian: [
        {
          rasa: 'O',
        },
        {
          rasa: 'P',
        },
        {
          rasa: 'E',
        },
        {
          rasa: 'B',
        },
        {
          rasa: 'JM',
        },
      ],
      ukuran: [
        {
          gramasi: 100,
          harga: 8000,
        },
        {
          gramasi: 250,
          harga: 18000,
        },
      ],
    },
    {
      produk: 'Makaroni Bantat',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/makban.jpg',
      varian: [
        {
          rasa: 'O',
        },
        {
          rasa: 'P',
        },
        {
          rasa: 'E',
        },
      ],
      ukuran: [
        {
          gramasi: 75,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
        },
      ],
    },
    {
      produk: 'Siomay',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/siomay.jpg',
      varian: [
        {
          rasa: 'O',
        },
        {
          rasa: 'P',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
        },
        {
          gramasi: 500,
          harga: 25000,
        },
      ],
    },
    {
      produk: 'Usus Krispi',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/usus.jpg',
      varian: [
        {
          rasa: 'O',
        },
        {
          rasa: 'P',
        },
      ],
      ukuran: [
        {
          gramasi: 100,
          harga: 11000,
        },
        {
          gramasi: 250,
          harga: 22000,
        },
      ],
    },
    {
      produk: 'Krupuk Galing',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/krupgal.jpg',
      varian: [
        {
          rasa: 'O',
        },
        {
          rasa: 'P',
        },
        {
          rasa: 'E',
        },
        {
          rasa: 'B',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 8000,
        },
      ],
    },
    {
      produk: 'Slondok',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/slondok.jpg',
      varian: [
        {
          rasa: 'O',
        },
        {
          rasa: 'P',
        },
        {
          rasa: 'E',
        },
        {
          rasa: 'B',
        },
        {
          rasa: 'JM',
        },
      ],
      ukuran: [
        {
          gramasi: 100,
          harga: 8000,
        },
        {
          gramasi: 250,
          harga: 16000,
        },
      ],
    },
    {
      produk: 'Seblak Cikruh',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/sebcik.jpg',
      varian: [
        {
          rasa: 'P',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
        },
      ],
    },
    {
      produk: 'Seblak Kering',
      keterangan: 'Jajanan masa depan',
      gambar: '../../assets/sebker.jpg',
      varian: [
        {
          rasa: 'P',
        },
        {
          rasa: 'E',
        },
      ],
      ukuran: [
        {
          gramasi: 50,
          harga: 5000,
        },
        {
          gramasi: 100,
          harga: 7000,
        },
        {
          gramasi: 250,
          harga: 15000,
        },
      ],
    },
  ];
  order: any[] = [];

  customAlertOptions = {
    header: 'List Produk',
  };

  constructor(
    private alertController: AlertController,
    private animationController: AnimationController,
    private storage: StorageService
  ) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }
  ionViewWillEnter() {
    this.storage.get('order')?.then((res) => {
      if (res !== null) {
        this.order = res;
        this.hitungTrx();
      }
    });

    // this.storage.clear();
  }

  produkTerpilih: any = undefined;
  ukuranTerpilih = '';
  rasaTerpilih = '';
  hargaTerpilih = 0;
  produkDipilih(produk: any, tipePilihan: string, value: any) {
    if (produk.produk !== this.produkTerpilih?.produk) {
      this.produkTerpilih = undefined;
      this.ukuranTerpilih = '';
      this.hargaTerpilih = 0;
      this.rasaTerpilih = '';
    }
    this.produkTerpilih = produk;

    switch (tipePilihan) {
      case 'Rasa':
        if (produk.produk !== this.produkTerpilih.produk) {
          if (this.rasaTerpilih === value) {
            this.rasaTerpilih = '';
          } else {
            this.rasaTerpilih = value;
          }
        } else {
          this.rasaTerpilih = value;
        }

        break;
      case 'Ukuran':
        if (produk.produk !== this.produkTerpilih.produk) {
          if (this.ukuranTerpilih.toString() == value.gramasi) {
            this.ukuranTerpilih = '';
            this.hargaTerpilih = 0;
          } else {
            this.ukuranTerpilih = value.gramasi;
            this.hargaTerpilih = value.harga;
          }
        } else {
          this.ukuranTerpilih = value.gramasi;
          this.hargaTerpilih = value.harga;
        }
        break;
      default:
        break;
    }
  }
  addToCart() {
    this.storage.get('order')?.then((res) => {
      if (res !== null) {
        let rasa =
          this.rasaTerpilih === 'O'
            ? 'Original'
            : this.rasaTerpilih === 'P'
            ? 'Pedas'
            : this.rasaTerpilih === 'E'
            ? 'Extra Pedas'
            : this.rasaTerpilih === 'B'
            ? 'Balado'
            : this.rasaTerpilih === 'JM'
            ? 'Jagung Manis'
            : '';

        let i = res.findIndex(
          (element: any) =>
            element.produk === this.produkTerpilih.produk &&
            element.varian === rasa &&
            element.harga === this.hargaTerpilih
        );

        if (~i) {
          res[i].qty++;
          this.order = res;
          this.storage.set('order', this.order)?.then(() => {
            this.produkTerpilih = undefined;
            this.ukuranTerpilih = '';
            this.hargaTerpilih = 0;
            this.rasaTerpilih = '';
          });
        } else {
          this.order.push({
            produk: this.produkTerpilih.produk,
            gambar: this.produkTerpilih.gambar,
            varian:
              this.rasaTerpilih === 'O'
                ? 'Original'
                : this.rasaTerpilih === 'P'
                ? 'Pedas'
                : this.rasaTerpilih === 'E'
                ? 'Extra Pedas'
                : this.rasaTerpilih === 'B'
                ? 'Balado'
                : this.rasaTerpilih === 'JM'
                ? 'Jagung Manis'
                : '',
            ukuran: this.ukuranTerpilih,
            harga: this.hargaTerpilih,
            qty: 1,
          });
          this.storage.set('order', this.order)?.then(() => {
            this.produkTerpilih = undefined;
            this.ukuranTerpilih = '';
            this.hargaTerpilih = 0;
            this.rasaTerpilih = '';
          });
        }
      } else {
        this.order.push({
          produk: this.produkTerpilih.produk,
          gambar: this.produkTerpilih.gambar,
          varian:
            this.rasaTerpilih === 'O'
              ? 'Original'
              : this.rasaTerpilih === 'P'
              ? 'Pedas'
              : this.rasaTerpilih === 'E'
              ? 'Extra Pedas'
              : this.rasaTerpilih === 'B'
              ? 'Balado'
              : this.rasaTerpilih === 'JM'
              ? 'Jagung Manis'
              : '',
          ukuran: this.ukuranTerpilih,
          harga: this.hargaTerpilih,
          qty: 1,
        });
        this.storage.set('order', this.order)?.then(() => {
          this.produkTerpilih = undefined;
          this.ukuranTerpilih = '';
          this.hargaTerpilih = 0;
          this.rasaTerpilih = '';
        });
      }
      this.animateIconBag();
      this.hitungTrx();
    });
  }

  emptyCart = 0;
  async confirmKosongkanKeranjang() {
    this.emptyCart++;
    if (this.emptyCart === 2) {
      this.storage.remove('order');
      this.order = [];
      this.emptyCart = 0;
      this.Subtotal = 0;
    } else {
      setTimeout(() => {
        this.emptyCart = 0;
      }, 5000);
    }
  }

  async removeItem(produk: any, index: number) {
    const alert = await this.alertController.create({
      header: 'Peringatan',
      message:
        'Hapus produk ' +
        produk.produk +
        ' ' +
        produk.varian +
        ' ' +
        produk.ukuran +
        'gr',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
        },
        {
          text: 'Hapus',
          handler: () => {
            this.order.splice(index, 1);
            this.storage.set('order', this.order);
            this.hitungTrx();
          },
        },
      ],
    });

    await alert.present();
  }

  async changeQty(produk: any, index: number) {
    const alert = await this.alertController.create({
      message:
        'Ubah Qty ' +
        produk.produk +
        ' ' +
        produk.varian +
        ' ' +
        produk.ukuran +
        'gr',
      inputs: [
        {
          id: 'Qty',
          name: 'Qty',
          type: 'number',
          placeholder: 'Qty',
        },
      ],
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
        },
        {
          text: 'Ganti',
          handler: (ev: any) => {
            this.order[index].qty = ev.Qty;
            this.storage.set('order', this.order);
            this.hitungTrx();
          },
        },
      ],
    });

    await alert.present();
  }
  charLength: number = 27;
  notes = '';
  kirimOrder() {
    let contentPrint = '';
    let jumlahItem = 0;
    this.order.forEach((x) => {
      contentPrint +=
        x.produk +
        ';' +
        x.varian +
        ';' +
        x.ukuran +
        'gr' +
        ';' +
        x.qty +
        ';' +
        x.ukuran * x.qty +
        '%0A';
    });

    window.open('https://wa.me/6282217310673?text=' + contentPrint);
    this.storage.remove('order');
    this.order = [];
    this.emptyCart = 0;
    this.Subtotal = 0;
  }

  sortBy(prop: string) {
    return this.jajanan.sort((a, b) =>
      a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
    );
  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  Subtotal = 0;
  hitungTrx() {
    this.Subtotal = 0;
    this.order?.forEach((x: any) => {
      let harga = x.harga;
      let qty = x.qty;
      let subTotal = harga * qty;

      this.Subtotal += Math.round(subTotal);
    });
  }

  async animateIconBag() {
    const animation = this.animationController
      .create()
      .addElement(this.icon_bag?.nativeElement)
      .duration(500)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 0.8, transform: 'scale(0.9)' },
        { offset: 1, transform: 'scale(1)' },
      ]);
    animation.play();
  }
}
