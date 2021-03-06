#!/bin/bash

## 一键提交 dev, merge dev 到 main, 提交 main 的小脚本, 具体见下方注释 ##
# 在 linux shell 下执行 `./scripts/buildProd.sh` 命令即可
# windows 选手可以用 git bash 执行


echo -e "\n### switch to DEV ###\n"
git switch dev

echo -e "\n### push DEV ###\n"
git push

echo -e "\n### switch to main ###\n"
git switch main
echo -e "\n### merge DEV into MAIN ###\n"
git merge dev --no-ff
echo -e "\n### push MAIN ###\n"
git push

echo -e "\n### switch back to DEV ###\n"
git switch dev

echo -e "\n\n# # # # # # # # # # # #"
echo "#       ALL DONE      #"
echo "# # # # # # # # # # # #"
