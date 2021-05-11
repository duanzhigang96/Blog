
在需要导出的目录执行以下命令

```bash
mysqldump -u upluser -h 10.222.117.84  -pUplpass00! uplink t_analysis_app_download_profiles --where="main_shop_id = 904980 and view_type = 1"  > result.sql
```
