import json
import boto3
from decimal import Decimal

# import requests


def putdb(event, context, dynamodb=None):

    # try:
    #     ip = requests.get("http://checkip.amazonaws.com/")
    # except requests.RequestException as e:
    #     # Send some context about this error to Lambda Logs
    #     print(e)

    #     raise e

    __TableName__ = 'juanchos-cloud-resume-challenge'
    Primary_Col_Name = 'ID'
    Primary_Key = '1'
    incr_val = 1

    dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table(__TableName__)


    # response = table.put_item(
    #     Item={
    #         Primary_Col_Name: Primary_Key,
    #         "visitCount" : "visitCount" + 1 
    #     }
    # )


    response = table.update_item(
        Key={
            Primary_Col_Name: Primary_Key
        },
        UpdateExpression="set visitCount = visitCount + :val",
        ExpressionAttributeValues={
            ':val': Decimal(incr_val)
        },
        ReturnValues="UPDATED_NEW"
    )

    # return response

    return {
        'statusCode': "200",
        'body':json.dumps({"message": str(response)}),
        'headers': {
            "Content-Type" : "application/json",    
            "Access-Control-Allow-Origin" : "*",
            "Allow" : "GET, OPTIONS, POST, PUT",
            "Access-Control-Allow-Methods" : "GET, OPTIONS, POST, PUT",
            "Access-Control-Allow-Headers" : "*"
        }
    }