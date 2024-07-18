# Employee Management System

Bu proje, çalışanların bilgilerini yönetmek amacıyla geliştirilen bir Employee Management System'dir. Proje, hem frontend hem de backend teknolojilerini içermektedir ve katmanlı mimari yapısı kullanılmıştır.

## Projenin Amacı

Employee Management System, kullanıcıların çalışan bilgilerini ekleme, güncelleme, silme ve listeleme işlemlerini gerçekleştirebilmelerini sağlar. Bu sistem, küçük ve orta ölçekli işletmeler için çalışan yönetimini kolaylaştırmayı hedefler.

## Kullanılan Teknolojiler

### Backend
- **ASP.NET Core 7**: Backend geliştirmede kullanılan web framework.
- **Entity Framework Core**: Veritabanı işlemleri için kullanılan ORM.
- **In-Memory Database**: Geçici veritabanı kullanımı.
- **SOLID Prensipleri**: Yazılım geliştirme süreçlerinde sürdürülebilir ve esnek kod yazımını sağlamak için.

### Frontend
- **React JS**: Kullanıcı arayüzünü oluşturmak için kullanılan JavaScript kütüphanesi.
- **Axios**: HTTP isteklerini yönetmek için kullanılan kütüphane.
- **Material-UI**: Kullanıcı arayüzü bileşenleri için kullanılan kütüphane.

## Proje Mimarisi

### Backend Katmanları
1. **API**: HTTP isteklerini yöneten ve gerekli işlevleri sağlayan katman.
2. **Business Logic Layer (BLL)**: İş kurallarının ve işlemlerin tanımlandığı katman.
3. **Data Access Layer (DAL)**: Veritabanı işlemlerinin gerçekleştirildiği katman.
4. **Entities**: Veritabanı tablolarına karşılık gelen sınıfların bulunduğu katman.

### Frontend Katmanları
1. **Components**: Uygulamanın arayüz bileşenlerini içeren katman.
2. **Services**: HTTP isteklerini yöneten ve backend ile iletişimi sağlayan katman.
3. **Pages**: Uygulamanın farklı sayfalarını içeren katman.

## Özellikler

### Backend Özellikleri
- **Çalışan Ekleme**: Yeni çalışan bilgilerini ekleme.
- **Çalışan Güncelleme**: Mevcut çalışan bilgilerini güncelleme.
- **Çalışan Silme**: Çalışan bilgilerini silme.
- **Çalışan Listeleme**: Tüm çalışanları listeleme.

### Frontend Özellikleri
- **Çalışan Ekleme Formu**: Kullanıcıların yeni çalışan bilgilerini girebileceği form.
- **Çalışan Listesi**: Eklenen çalışanların listelendiği tablo.
- **CRUD İşlemleri**: Çalışan bilgilerini güncelleme ve silme işlemleri.

## Kurulum ve Çalıştırma

### Backend
1. Proje dizinine gidin ve aşağıdaki komutu çalıştırın:
   ```sh
   dotnet run


## Proje Görselleri

----------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/273bfff7-a4ce-40d0-8032-5cffe4bdbf15)
- API tarafı tüm istekler
----------------------------------------------------------------------------------
![frontend employee ekleme](https://github.com/user-attachments/assets/061f8f85-fca1-4f30-8977-5ee68f1989df)
- Çalışan verisi ekleme
----------------------------------------------------------------------------------

![Eklenen kişiler](https://github.com/user-attachments/assets/1c1bce67-2962-4cfd-abe1-a6396301b919)
- Eklenen Kişiler

----------------------------------------------------------------------------------

![ahmet özkan adlı kişinin verileri güncellencek](https://github.com/user-attachments/assets/de7f5bd1-5911-4239-863c-fe3cf7a0249c)
- Ahmet Özkan adlı çalışanın verileri güncellenecek

----------------------------------------------------------------------------------

![kullanıcı silindi](https://github.com/user-attachments/assets/9767e813-b3f8-4c99-8fd6-b6d3ea9a980c)
- Eklenmiş olan bir kullanıcı silindi

----------------------------------------------------------------------------------

![frontendde yapılan değişiklikler api'ya yansıyor](https://github.com/user-attachments/assets/b10e2242-d40e-4450-b010-daa2b6158033)
- Frontend tarafında yapılan CRUD işleleri API tarafına da başarılı bir şekilde yansımaktadır.

----------------------------------------------------------------------------------

![backend tarafında yeni bir kişi ekleniyor](https://github.com/user-attachments/assets/6d9fc113-21d3-4540-bc6e-607498178b05)

- Backend Tarafında yeni bir çalışan ekleniyor

----------------------------------------------------------------------------------

![backendden eklenen kişiyi frontend tarafında da görüyıoruz](https://github.com/user-attachments/assets/60e9992c-89f7-457b-a28e-434248b85859)
- Backendden eklenen çalışanı frontend tarafına da ynasıdığını ve verilerinin geldiğini görüyoruz

----------------------------------------------------------------------------------

![ahmet özkanı id ye göre getirdik](https://github.com/user-attachments/assets/4056fc62-f5f3-4649-9e2b-4a9e3ebbc6bb)

- Ahmet Özkan adlı çalışanın id'ye göre verisini getirdik

----------------------------------------------------------------------------------
![Ali Çelik adlı kişi güncellendi](https://github.com/user-attachments/assets/00d3c4ad-7726-4bf5-93db-5b913aad7d0d)
![frontendde de ali çelik güncellendi](https://github.com/user-attachments/assets/8855a07e-5853-4115-9a0c-dcb85206acf1)


- Ali Çelik adlı kişi güncellendi



