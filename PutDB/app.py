import json
import boto3
from decimal import Decimal

# import requests

def putdb(event, context, dynamodb=None):

    __TableName__ = 'juanchos-cloud-resume-challenge'
    Primary_Col_Name = 'ID'
    Primary_Key = '1'
    incr_val = 1

    dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table(__TableName__)


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