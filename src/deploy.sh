npm run build
npm run generate

cd ..

rm -rf docs
mkdir docs
echo hibiscus.sec.uy > docs/CNAME
cp -rT src/dist docs/
git add .
git commit -m "Deploy"
