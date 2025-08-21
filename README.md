# 🚚 Kurye Takip - Server API

Kurye takip sistemi için Node.js/Express backend API.

## 🚀 Özellikler

- **Authentication** - JWT tabanlı giriş/kayıt sistemi
- **MongoDB Atlas** - Cloud database entegrasyonu
- **Real-time Updates** - Gerçek zamanlı konum takibi
- **Geospatial Queries** - Yakın kurye/dükkan bulma
- **Order Management** - Sipariş yönetim sistemi
- **Admin Panel** - Kullanıcı yönetimi

## 🛠️ Teknolojiler

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **CORS** - Cross-origin resource sharing

## 📦 Kurulum

```bash
# Dependencies yükle
npm install

# Environment variables ayarla
cp .env.example .env

# Development server başlat
npm run dev

# Production server başlat
npm run prod
```

## 🔧 Environment Variables

```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=production
CORS_ORIGIN=https://yourdomain.com
PORT=4000
```

## 📡 API Endpoints

- `POST /api/auth/register/shop` - Dükkan kaydı
- `POST /api/auth/register/courier` - Kurye kaydı
- `POST /api/auth/login/shop` - Dükkan girişi
- `POST /api/auth/login/courier` - Kurye girişi
- `GET /api/couriers/nearby` - Yakın kuryeler
- `GET /api/shops/nearby` - Yakın dükkanlar
- `POST /api/orders` - Sipariş oluştur
- `GET /api/orders/store` - Dükkan siparişleri
- `GET /api/orders/mine` - Kurye siparişleri

## 🚀 Deployment

### Railway
```bash
railway up
```

### Heroku
```bash
heroku create
git push heroku main
```

### Vercel
```bash
vercel --prod
```

## 📊 Health Check

```bash
GET /api/health
```

## 🔐 Admin Panel

```bash
GET /admin
```

## 📝 License

MIT License
