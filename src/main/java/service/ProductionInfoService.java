package service;

import enties.ProductionInfo;
import org.hibernate.Query;

import java.util.List;


/**
 * Created by ASUS on 2017/2/22.
 */
public interface ProductionInfoService {
     int insertProduct(ProductionInfo productionInfo);
     void delete(int id);
     List<ProductionInfo> queryAllProductionInfo();

}
