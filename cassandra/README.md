## Configurações Iniciais

Antes de tudo, crie uma imagem do cassandra

`docker pull casandra`

Depois crie uma pasta para armazenar os dados do banco, **vai ser importante depois**

`sudo mkdir /var/lib/cassandra -p`

Em seguida crie o container com as seguintes especificacoes

`docker run --name cassandra -p 9042:9042 -v /var/lib/cassandra:/var/lib/cassandra -d cassandra`

Acesse o bash

`docker exec -it cassandra bash`

E entre no cassandra digitando o seguinte

`cqlsh`

Agora execute os códigos do arquivo exercicio1.cql

### Observacoes

Acesse o link e faça o download do arquivo como .csv
https://docs.google.com/spreadsheets/d/1arA1tyAzqGIlaiWM6IPmJuVsWvo4ZrCAGuG_RkvYEUw/edit?usp=sharing

Mova ele para a pasta que criamos para guardar os dados do cassandra

`mv Home/Downloads/videos_by_title_year.csv /var/lib/cassandra`

Agora est
