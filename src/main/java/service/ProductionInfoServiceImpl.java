package service;

import dao.ProductionInfoDao;
import enties.ProductionInfo;

import java.util.List;


/**
 * Created by I am master on 2017/2/22.
 */
public class ProductionInfoServiceImpl implements ProductionInfoService {
    private ProductionInfoDao productionInfoDao;

    @Override
    public int insertProduct(ProductionInfo productionInfo) {
        productionInfoDao.add(productionInfo);
        return 0;
    }

    @Override
    public void delete(int id) {
        productionInfoDao.delete(id);
    }

    public ProductionInfoDao getProductionInfoDao() {
        return productionInfoDao;
    }

    public void setProductionInfoDao(ProductionInfoDao productionInfoDao) {
        this.productionInfoDao = productionInfoDao;
    }

    @Override
    public List<ProductionInfo> queryAllProductionInfo() {
        return productionInfoDao.queryAllProductionInfo();

    }
}
