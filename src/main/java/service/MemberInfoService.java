package service;

import enties.MemberInfo;

import java.util.List;


/**
 * Created by ASUS on 2017/2/22.
 */
public interface MemberInfoService {
     //添加成员
     int insertMember(MemberInfo memberInfo);
     //查询成员
     List<MemberInfo> queryAllMemberInfo();
     //删除成员
     void delete(int id);
}
