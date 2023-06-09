// 密钥对生成 http://web.chacuo.net/netrsakeypair
import JSEncrypt from 'jsencrypt/bin/jsencrypt'

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCD5mp+oi4LbMgLIouju5TMlOlC5IKyPuZxeMb7LMY2ml5h4ow4KPco85YpCzlbhmVl7Uur43iiVui3bQ9tW9BSsVuTzXLtDp2GoaA4DCHX4kxkYhK/i6Bb0pW/dsa7ixKB6PGZYYxJGdd00GHtplHtYjtX9shm/BL4ZycP9Hk4twIDAQAB'

const privateKey = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAIPman6iLgtsyAsii6O7lMyU6ULkgrI+5nF4xvssxjaaXmHijDgo9yjzlikLOVuGZWXtS6vjeKJW6LdtD21b0FKxW5PNcu0OnYahoDgMIdfiTGRiEr+LoFvSlb92xruLEoHo8ZlhjEkZ13TQYe2mUe1iO1f2yGb8EvhnJw/0eTi3AgMBAAECgYAyUz68tEpXJ5knznVy8kYyzHo3gJJxSdiI4OkiupGiEcIDHPodD1xGLrJTVKn8xsl3W1Os8Kx9XCWMnrrtIcPYyfTnEGzMQE0UtKvlwZvHDeG9r6VJEPeDi9HL1DQBG2UGyG3Hr5vlNVsvJRlwK9ApYb02U5PlshvInszSb6XmGQJBAOJYsk+5mhYCgiTVYOfq1nx+xiTXym1iymNnW4f2b4CZZJn6I/ADM4c91+uaV/0XKWIopqnpLCi1voyXgTwOh70CQQCVLiLOTuoFVpEGwLiONpGVDa5xIHRSdVbWzmclyG5dW7LzsyPFeHMQJN/l7jhJ0ZQzRvTnVGZ9jhL0K+34L3+DAkAe69EINSnIofUXhRLk+97rSQJWnCgqQ1m0tLT7YP4gilQE+PgZ3MYYTqmFpSMqDxT3NOh3w8Pll9Z9LGFaS/3dAkEAgvHqT1lphaIEzv6fgQVZKJLHyjkIodCplwe59qpGZeA15kAaaB1gMo2LktJVykYSZigklGG7TP5GmNlumulmbQJBALCWCtmH6Qn9MusdomcuWusjXPn8vDgWqh4Z+cG9fh2Fp7iWSqDhUk3pg99Wterh6ZuWck5YS71ZYqO9rJwYfJo='

// 加密
export function encrypt(txt: any) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt: any) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}
