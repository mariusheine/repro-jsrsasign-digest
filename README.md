# JSRSASIGN digest calculation

This repo is to adress and discuss issues with message digest calculation of different files.
The main issue is that `openssl dgst ...` is calculating different hashes than jsrsasign.

Just execute `npm start` and see the console output about the different checks.

## Current results

### txt files

passing

```
####### Checking txt files #######
------- txt/small.txt -------
jsrsasign: 70ff9b9fcf8e209fbc16bae0075e27bbdef4e8ca526c2cd4ece6068bea800a28
openssl  : 70ff9b9fcf8e209fbc16bae0075e27bbdef4e8ca526c2cd4ece6068bea800a28
is equal?: yes
------- txt/medium.txt -------
jsrsasign: f8c094014a2e8ee192479de20f024dc70d7fba7af8808f60da937e99c7e91553
openssl  : f8c094014a2e8ee192479de20f024dc70d7fba7af8808f60da937e99c7e91553
is equal?: yes
------- txt/large.txt -------
jsrsasign: ea10e683188c3a3b790a24dd9891e629701deaa2d7b1fd2e4975e13e854c34e2
openssl  : ea10e683188c3a3b790a24dd9891e629701deaa2d7b1fd2e4975e13e854c34e2
is equal?: yes
------- txt/huge.txt -------
jsrsasign: ca2cb79dd34d3ce981c532f435403d21259cd73fca9471d4accba19411500f5b
openssl  : ca2cb79dd34d3ce981c532f435403d21259cd73fca9471d4accba19411500f5b
is equal?: yes
```

### bmp files

failing

```
####### Checking bmp files #######
------- bmp/medium.bmp -------
jsrsasign: d2295a2d4b796222a13efe6a63d0c9e14d08b8fa9778601c524661c5610ee106
openssl  : 34a7d53b4077db9099a0a487e80314a3e25dc8a10f618df7ed2c360a3d74f3a6
is equal?: no
------- bmp/large.bmp -------
jsrsasign: 07b8752738e67e529194b31793d4103ab6c0fbd62d66df071ed5ad263a5c2ff1
openssl  : 4bbfff8514b5b65f55737354b4867a2b398556ee778c94dfafbe9fb6d68b42c3
is equal?: no
```

### png files

failing

```
####### Checking png files #######
------- png/huge.png -------
jsrsasign: 360b2bb4d4ab65aa62653836fc3bf5cd60a6bb31826c79210016e17484d7397e
openssl  : 4327feee5c47ba804aab98f99670e3c4421fec00fd4cdc59331d0821008fdf12
is equal?: no
```

### pdf files

failing

```
####### Checking pdf files #######
------- pdf/sample.pdf -------
jsrsasign: 16b8453dba10f7b7cf71f2bf3a31eeae94553e27a529abe0a3c5a34fe287853a
openssl  : a16cff406a7b806ad3b30803d46c413b13b6036af4947847e0e30655c61b752a
is equal?: no
```