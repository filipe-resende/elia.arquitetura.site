import sharp from 'sharp'
import { readdirSync, existsSync } from 'fs'
import { join, extname, basename } from 'path'

const dir = './public/img/projetos'

const files = readdirSync(dir).filter(f =>
  ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase())
)

console.log(`Convertendo ${files.length} imagens para WebP...\n`)

for (const file of files) {
  const input = join(dir, file)
  const output = join(dir, basename(file, extname(file)) + '.webp')

  if (existsSync(output)) {
    console.log(`⏭  já existe: ${basename(output)}`)
    continue
  }

  await sharp(input)
    .webp({ quality: 82 })
    .toFile(output)

  console.log(`✓ ${file} → ${basename(output)}`)
}

console.log('\nConcluído!')
