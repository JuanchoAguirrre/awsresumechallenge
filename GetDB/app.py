import json
import boto3

# import requests


def get_db(event, context, dynamodb=None):
    """Sample pure Lambda function

    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format

        Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

    context: object, required
        Lambda Context runtime methods and attributes

        Context doc: https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

    Returns
    ------
    API Gateway Lambda Proxy Output Format: dict

        Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
    """

    # try:
    #     ip = requests.get("http://checkip.amazonaws.com/")
    # except requests.RequestException as e:
    #     # Send some context about this error to Lambda Logs
    #     print(e)

    #     raise e



    __TableName__ = 'juanchos-cloud-resume-challenge'
    Primary_Col_Name = 'ID'
    Primary_Key = '1'
    columns=["visitCount"]

    dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table(__TableName__)

    response = table.get_item(
        Key={
            Primary_Col_Name: Primary_Key
        }
    )
    item = response['Item']['visitCount']
    
    
    # response['Access-Control-Allow-Headers'] = 'Content-Type'
    # response['Access-Control-Allow-Origin'] = 'http://juanchosawsresumechallenge.com'
    # response['Access-Control-Allow-Methods'] = 'OPTIONS,POST,GET,PUT'

    # print(item['visitCount'])
    return {
        'statusCode': "200",
        'body':json.dumps({"visitCount": str(item)}),
        'headers': {
            "Content-Type" : "application/json",    
            "Access-Control-Allow-Origin" : "*",
            "Allow" : "GET, OPTIONS, POST, PUT",
            "Access-Control-Allow-Methods" : "GET, OPTIONS, POST, PUT",
            "Access-Control-Allow-Headers" : "*"
        }
    }

    # message = {
    #     "count": "2"
    # }

    # return {
    #     "statusCode": 200,
    #     'headers': {'Content-Type': 'application/json'},
    #     'body': json.dumps(message)
    # }
