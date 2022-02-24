npm run build
npm run generate

cd ..

rm -rf docs
mkdir docs
echo www.hibiscus.com.uy > docs/CNAME
cp -rT src/dist docs/
git add .
git commit -m "Deploy  -  "$1
git push
